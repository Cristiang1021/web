"use client";

import { useEffect, useRef, useState } from "react";
import { PLANS, WHATSAPP_URL } from "@/lib/constants";
import { MonoLabel } from "@/components/ui";

type TestState = "idle" | "running" | "done";

export function SpeedTestPanel() {
  const defaultPlan = PLANS.find((p) => p.id === "pro-plus") ?? PLANS[0];
  const [selectedId, setSelectedId] = useState(defaultPlan.id);
  const [state, setState] = useState<TestState>("idle");
  const [displaySpeed, setDisplaySpeed] = useState(defaultPlan.speed);
  const frameRef = useRef<number | null>(null);
  const selectedIdRef = useRef(selectedId);

  const selectedPlan = PLANS.find((p) => p.id === selectedId) ?? PLANS[0];

  useEffect(() => {
  }, [selectedId]);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function stopAnimation() {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }

  function selectPlan(planId: string) {
    const plan = PLANS.find((p) => p.id === planId);
    if (!plan) return;

    stopAnimation();
    setSelectedId(plan.id);
    setState("idle");
    setDisplaySpeed(plan.speed);
  }

  function runTest() {
    if (state === "running") return;

    stopAnimation();
    setState("running");
    setDisplaySpeed(0);

    const target = selectedPlan.speed;
    const planIdAtStart = selectedPlan.id;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      // Si el usuario cambió de plan, abortar este test
      if (selectedIdRef.current !== planIdAtStart) {
        frameRef.current = null;
        return;
      }

      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplaySpeed(Math.round(target * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplaySpeed(target);
        setState("done");
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  }

  return (
    <div className="relative z-10 overflow-hidden rounded-[22px] bg-[#17171c] p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <MonoLabel className="text-[#93939f]">Prueba tu conexión</MonoLabel>
        <span
          className={`rounded-full border px-3 py-1 text-xs ${
            state === "done"
              ? "border-[#7CFF6B]/40 text-[#7CFF6B]"
              : "border-white/20 text-white/70"
          }`}
        >
          {state === "running"
            ? "Midiendo…"
            : state === "done"
              ? "Máxima del plan"
              : "Listo"}
        </span>
      </div>

      <p className="mb-4 text-sm text-white/70">
        Elige un plan y simula la velocidad máxima que puedes alcanzar.
      </p>

      <div
        className="relative z-20 mb-6 flex flex-wrap gap-2"
        role="group"
        aria-label="Seleccionar plan"
      >
        {PLANS.map((plan) => {
          const active = plan.id === selectedId;
          return (
            <button
              key={plan.id}
              type="button"
              aria-pressed={active}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                selectPlan(plan.id);
              }}
              className={`cursor-pointer rounded-full px-3.5 py-2 text-xs font-medium transition-colors ${
                active
                  ? "bg-white text-[#17171c]"
                  : "border border-white/20 bg-transparent text-white/80 hover:border-white/50 hover:bg-white/10"
              }`}
            >
              {plan.name.replace("Plan ", "")} · {plan.speed} Mbps
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-5">
        <p className="text-xs text-[#93939f]">
          {state === "running" ? "Probando velocidad" : "Velocidad del plan"}
        </p>
        <p className="mt-1 font-display text-5xl tracking-tight text-white">
          {displaySpeed} <span className="text-lg text-white/60">Mbps</span>
        </p>
        <p className="mt-2 text-sm text-white/55">
          {selectedPlan.name} · ${selectedPlan.price}/mes
        </p>

        {state === "running" && (
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#7CFF6B]"
              style={{
                width: `${Math.min((displaySpeed / selectedPlan.speed) * 100, 100)}%`,
              }}
            />
          </div>
        )}
      </div>

      {state === "done" && (
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-[#93939f]">Descarga</p>
            <p className="mt-1 text-sm text-white">{selectedPlan.speed} Mbps</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-[#93939f]">Subida</p>
            <p className="mt-1 text-sm text-white">{selectedPlan.speed} Mbps</p>
          </div>
        </div>
      )}

      <div className="relative z-20 mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            runTest();
          }}
          disabled={state === "running"}
          className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#17171c] transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "running"
            ? "Probando…"
            : state === "done"
              ? "Probar de nuevo"
              : "Probar velocidad"}
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          Contratar este plan
        </a>
      </div>
    </div>
  );
}
