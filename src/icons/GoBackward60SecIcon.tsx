import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoBackward60SecIcon({
  iconName = 'go-backward-60-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
