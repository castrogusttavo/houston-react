import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiSquareIcon({
  iconName = 'wifi-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
