import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleLensIcon({
  iconName = 'google-lens',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
