import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GpuIcon({ iconName = 'gpu', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
