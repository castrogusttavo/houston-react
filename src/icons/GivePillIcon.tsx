import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GivePillIcon({ iconName = 'give-pill', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
