import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GpuIconIcon({ iconName = 'gpu-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
