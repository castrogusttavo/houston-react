import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GemIcon({ iconName = 'gem', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
