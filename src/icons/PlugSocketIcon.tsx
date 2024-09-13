import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlugSocketIcon({
  iconName = 'plug-socket',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
