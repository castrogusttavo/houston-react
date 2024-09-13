import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TvSmartIcon({ iconName = 'tv-smart', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
