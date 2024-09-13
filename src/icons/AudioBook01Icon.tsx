import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AudioBook01Icon({
  iconName = 'audio-book-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
