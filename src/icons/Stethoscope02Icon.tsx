import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Stethoscope02Icon({
  iconName = 'stethoscope-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
