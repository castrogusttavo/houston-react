import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoBackward5SecIcon({
  iconName = 'go-backward-5-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
