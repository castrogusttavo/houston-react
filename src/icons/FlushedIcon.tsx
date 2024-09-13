import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlushedIcon({ iconName = 'flushed', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
