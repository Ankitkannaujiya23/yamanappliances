import {
  AirVent,
  Tv,
  Fan,
  Refrigerator,
  WashingMachine,
  Flame,
  Wind,
  Microwave,
  Droplets,
  Snowflake,
  BatteryCharging,
  Wrench,
} from "lucide-react";

export const iconMap = {
  AirVent,
  Tv,
  Fan,
  Refrigerator,
  WashingMachine,
  Flame,
  Wind,
  Microwave,
  Droplets,
  Snowflake,
  BatteryCharging,
};

export function ServiceIcon({ name, ...props }) {
  const Icon = iconMap[name] || Wrench;
  return <Icon {...props} />;
}
