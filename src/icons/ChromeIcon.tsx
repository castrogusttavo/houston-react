import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChromeIcon({ iconName = 'chrome', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
