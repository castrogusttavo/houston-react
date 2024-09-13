import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoForward10SecIcon({
  iconName = 'go-forward-10-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
