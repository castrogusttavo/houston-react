import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mouse20Icon({ iconName = 'mouse-20', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
