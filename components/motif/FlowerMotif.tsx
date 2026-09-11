"use client";

import { motion, useReducedMotion } from "motion/react";

type FlowerMotifProps = {
  className?: string;
  size?: number;
  delay?: number;
  interactive?: boolean;
  ambient?: boolean;
  cycleDuration?: number;
};

// 8 outer petals
const OUTER_PETALS = [0, 45, 90, 135, 180, 225, 270, 315];
// 6 mid petals offset
const MID_PETALS = [22.5, 82.5, 142.5, 202.5, 262.5, 322.5];
// 5 inner budding petals
const INNER_PETALS = [0, 72, 144, 216, 288];

export default function FlowerMotif({
  className = "",
  size = 72,
  delay = 0,
  interactive = true,
  ambient = true,
  cycleDuration = 2.4,
}: FlowerMotifProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <g transform="translate(50, 50)">
          {OUTER_PETALS.map((deg) => (
            <path
              key={`outer-${deg}`}
              d="M 0 0 C -10 -20, -14 -35, 0 -44 C 14 -35, 10 -20, 0 0 Z"
              fill="#F9E6EE"
              stroke="#E8A0BF"
              strokeWidth="0.8"
              opacity="0.85"
              transform={`rotate(${deg})`}
            />
          ))}
          {MID_PETALS.map((deg) => (
            <path
              key={`mid-${deg}`}
              d="M 0 0 C -8 -16, -11 -28, 0 -34 C 11 -28, 8 -16, 0 0 Z"
              fill="#F4D3E3"
              stroke="#C97A9E"
              strokeWidth="0.8"
              opacity="0.9"
              transform={`rotate(${deg})`}
            />
          ))}
          {INNER_PETALS.map((deg) => (
            <path
              key={`inner-${deg}`}
              d="M 0 0 C -6 -12, -8 -20, 0 -24 C 8 -20, 6 -12, 0 0 Z"
              fill="#E8A0BF"
              opacity="0.95"
              transform={`rotate(${deg})`}
            />
          ))}
          <circle cx="0" cy="0" r="6" fill="#C97A9E" />
          <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }

  return (
    <motion.div
      className={`inline-block select-none ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={interactive ? { scale: 1.18, rotate: 12 } : undefined}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        animate={
          ambient
            ? {
                rotate: [0, 7, -6, 0],
                scale: [1, 1.04, 0.96, 1],
              }
            : undefined
        }
        transition={
          ambient
            ? {
                duration: cycleDuration + 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      >
        <g transform="translate(50, 50)">
          {/* ── LAYER 1: OUTER FLOWER PETALS (Active Continuous Undulation) ── */}
          {OUTER_PETALS.map((deg, i) => (
            <motion.path
              key={`outer-${deg}`}
              d="M 0 0 C -10 -20, -14 -35, 0 -44 C 14 -35, 10 -20, 0 0 Z"
              fill="#F9E6EE"
              stroke="#E8A0BF"
              strokeWidth="0.75"
              opacity={0.88}
              initial={{ scale: 0, rotate: deg - 25, opacity: 0 }}
              whileInView={{ scale: 1, rotate: deg, opacity: 0.88 }}
              viewport={{ once: true }}
              animate={
                ambient
                  ? {
                      scale: [1, 1.12, 0.94, 1],
                      rotate: [deg, deg + 5, deg - 4, deg],
                    }
                  : undefined
              }
              transition={
                ambient
                  ? {
                      duration: cycleDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay + i * 0.06,
                    }
                  : {
                      duration: 0.5,
                      delay: delay + i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
            />
          ))}

          {/* ── LAYER 2: MID CORONA PETALS (Active Phase Shift Blossom) ── */}
          {MID_PETALS.map((deg, i) => (
            <motion.path
              key={`mid-${deg}`}
              d="M 0 0 C -8 -16, -11 -28, 0 -34 C 11 -28, 8 -16, 0 0 Z"
              fill="#F4D3E3"
              stroke="#C97A9E"
              strokeWidth="0.75"
              opacity={0.92}
              initial={{ scale: 0, rotate: deg + 20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: deg, opacity: 0.92 }}
              viewport={{ once: true }}
              animate={
                ambient
                  ? {
                      scale: [1, 0.91, 1.12, 1],
                      rotate: [deg, deg - 6, deg + 5, deg],
                    }
                  : undefined
              }
              transition={
                ambient
                  ? {
                      duration: Math.max(1.8, cycleDuration - 0.3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay + 0.1 + i * 0.06,
                    }
                  : {
                      duration: 0.45,
                      delay: delay + 0.1 + i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
            />
          ))}

          {/* ── LAYER 3: INNER BUD PETALS (Active Breathing Core) ── */}
          {INNER_PETALS.map((deg, i) => (
            <motion.path
              key={`inner-${deg}`}
              d="M 0 0 C -6 -12, -8 -20, 0 -24 C 8 -20, 6 -12, 0 0 Z"
              fill="#E8A0BF"
              stroke="#C97A9E"
              strokeWidth="0.6"
              opacity={0.95}
              initial={{ scale: 0, rotate: deg - 30, opacity: 0 }}
              whileInView={{ scale: 1, rotate: deg, opacity: 0.95 }}
              viewport={{ once: true }}
              animate={
                ambient
                  ? {
                      scale: [1, 1.16, 0.88, 1],
                      rotate: [deg, deg + 4, deg - 4, deg],
                    }
                  : undefined
              }
              transition={
                ambient
                  ? {
                      duration: Math.max(1.5, cycleDuration - 0.6),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay + 0.15 + i * 0.07,
                    }
                  : {
                      duration: 0.4,
                      delay: delay + 0.15 + i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
            />
          ))}

          {/* ── LAYER 4: BLOOMING CENTER PISTIL (Heartbeat Pulse) ── */}
          <motion.circle
            cx="0"
            cy="0"
            r="6"
            fill="#C97A9E"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            animate={
              ambient
                ? {
                    scale: [1, 1.28, 0.88, 1],
                  }
                : undefined
            }
            transition={
              ambient
                ? {
                    duration: Math.max(1.3, cycleDuration - 0.9),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : { duration: 0.35, delay: delay + 0.2, ease: "backOut" }
            }
          />

          <motion.circle
            cx="0"
            cy="0"
            r="2.6"
            fill="#FFFFFF"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            animate={
              ambient
                ? {
                    scale: [1, 1.35, 0.8, 1],
                    opacity: [0.9, 1, 0.6, 0.9],
                  }
                : undefined
            }
            transition={
              ambient
                ? {
                    duration: Math.max(1.1, cycleDuration - 1.1),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : { duration: 0.3, delay: delay + 0.25, ease: "easeOut" }
            }
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}
