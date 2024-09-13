import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GlobalEditingIcon({
  iconName = 'global-editing',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
