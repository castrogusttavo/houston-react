import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Html5Icon({ iconName = 'html-5', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
