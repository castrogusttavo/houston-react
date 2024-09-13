import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EquipmentWeightliftingIcon({
  iconName = 'equipment-weightlifting',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
