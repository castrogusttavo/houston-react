import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WhiskIcon({ iconName = 'whisk', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
