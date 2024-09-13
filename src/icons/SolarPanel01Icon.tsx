import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SolarPanel01Icon({
  iconName = 'solar-panel-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
