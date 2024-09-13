import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoBackward30SecIcon({
  iconName = 'go-backward-30-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
