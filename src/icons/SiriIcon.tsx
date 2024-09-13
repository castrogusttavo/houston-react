import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SiriIcon({ iconName = 'siri', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
