import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MedicineBottle01Icon({
  iconName = 'medicine-bottle-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
