import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiError02Icon({
  iconName = 'wifi-error-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
