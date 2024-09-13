import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TractorIcon({ iconName = 'tractor', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
