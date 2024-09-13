import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlmsIcon({ iconName = 'alms', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
