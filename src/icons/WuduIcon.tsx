import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WuduIcon({ iconName = 'wudu', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
