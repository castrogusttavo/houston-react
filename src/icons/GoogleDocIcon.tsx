import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleDocIcon({
  iconName = 'google-doc',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
