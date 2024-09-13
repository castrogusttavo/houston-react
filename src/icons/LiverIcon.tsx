import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LiverIcon({ iconName = 'liver', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
