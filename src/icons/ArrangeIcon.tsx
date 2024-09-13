import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrangeIcon({ iconName = 'arrange', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
