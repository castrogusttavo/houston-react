import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DocumentCodeIcon({
  iconName = 'document-code',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
