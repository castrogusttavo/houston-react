import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Loading02Icon({
  iconName = 'loading-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
