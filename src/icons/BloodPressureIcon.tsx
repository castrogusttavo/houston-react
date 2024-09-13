import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BloodPressureIcon({
  iconName = 'blood-pressure',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
