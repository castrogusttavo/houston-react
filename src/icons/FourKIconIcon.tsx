import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FourKIconIcon({ iconName = 'four-k-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
