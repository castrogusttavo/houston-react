import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AdobePhotoshopIcon({
  iconName = 'adobe-photoshop',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
