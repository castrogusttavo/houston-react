import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoForward5SecIcon({
  iconName = 'go-forward-5-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
