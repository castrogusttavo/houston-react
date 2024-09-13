import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoForward60SecIcon({
  iconName = 'go-forward-60-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
