import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RssIcon({ iconName = 'rss', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
