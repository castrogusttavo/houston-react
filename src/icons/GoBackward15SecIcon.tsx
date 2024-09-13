import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoBackward15SecIcon({
  iconName = 'go-backward-15-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
