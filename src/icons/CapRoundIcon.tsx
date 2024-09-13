import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CapRoundIcon({ iconName = 'cap-round', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
