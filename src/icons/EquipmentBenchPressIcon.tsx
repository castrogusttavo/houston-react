import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EquipmentBenchPressIcon({
  iconName = 'equipment-bench-press',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
