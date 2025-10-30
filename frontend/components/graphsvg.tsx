import React from "react";
import { Svg, Rect, Circle, Path } from "react-native-svg";

export default function DashboardIllustration() {
    return (
        <Svg width={240} height={200} viewBox="0 0 180 140" fill="none">

            <Rect x={20} y={0} width={140} height={120} rx={4} fill="#334155" />

            <Rect x={25} y={5} width={130} height={70} rx={2} fill="#1e293b" />

            <Rect x={30} y={10} width={120} height={60} rx={1} fill="#0f172a" />


            <Rect x={45} y={40} width={12} height={20} rx={2} fill="#f97316" />
            <Rect x={62} y={30} width={12} height={30} rx={2} fill="#3b82f6" />
            <Rect x={79} y={20} width={12} height={40} rx={2} fill="#06b6d4" />
            <Rect x={96} y={25} width={12} height={35} rx={2} fill="#10b981" />


            <Circle cx={130} cy={25} r={18} fill="#3b82f6" />

            <Path d="M 130 7 A 18 18 0 0 1 145 35 L 130 25 Z" fill="#f97316" />

            <Path d="M 145 35 A 18 18 0 0 1 125 42 L 130 25 Z" fill="#eab308" />

            <Rect x={30} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={42} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={54} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={66} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={78} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={90} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={102} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={114} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={126} y={85} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={138} y={85} width={12} height={4} rx={0.5} fill="#94a3b8" />

            <Rect x={30} y={93} width={12} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={44} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={54} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={64} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={74} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={84} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={94} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={104} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={114} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={124} y={93} width={8} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={134} y={93} width={16} height={4} rx={0.5} fill="#94a3b8" />

            <Rect x={30} y={101} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={42} y={101} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={54} y={101} width={60} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={116} y={101} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={128} y={101} width={10} height={4} rx={0.5} fill="#94a3b8" />
            <Rect x={140} y={101} width={10} height={4} rx={0.5} fill="#94a3b8" />
        </Svg>
    );
}