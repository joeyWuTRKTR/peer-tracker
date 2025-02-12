export type RoleType = "challenger" | "support_runner";

export const ROLE_TYPES: { value: RoleType; label: string }[] = [
    { value: "challenger", label: "Challenger" },
    { value: "support_runner", label: "Support Runner" },
];