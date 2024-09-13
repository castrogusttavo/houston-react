import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SlowWindsIcon({
  iconName = 'slow-winds',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
