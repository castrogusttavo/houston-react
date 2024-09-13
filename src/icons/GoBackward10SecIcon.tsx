import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoBackward10SecIcon({
  iconName = 'go-backward-10-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
