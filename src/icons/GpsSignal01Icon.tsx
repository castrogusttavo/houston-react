import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GpsSignal01Icon({
  iconName = 'gps-signal-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
