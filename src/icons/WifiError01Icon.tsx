import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiError01Icon({
  iconName = 'wifi-error-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
