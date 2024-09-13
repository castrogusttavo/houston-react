import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TvFixIcon({ iconName = 'tv-fix', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
