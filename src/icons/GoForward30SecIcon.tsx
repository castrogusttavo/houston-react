import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoForward30SecIcon({
  iconName = 'go-forward-30-sec',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
